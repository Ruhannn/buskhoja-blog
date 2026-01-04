import type { Nodes } from "hast";

import emojiRegex from "emoji-regex";
import { findAndReplace } from "hast-util-find-and-replace";
import { h } from "hastscript";

function emojiToCodePoint(emoji: string): string {
  return Array.from(emoji)
    .map(char => char.codePointAt(0)!.toString(16))
    .join("-");
}

export function rehypeTwemoji(inputOptions: {
  source: string;
  format: string;
}) {
  return (tree: Nodes) => {
    const {
      format,
      source,
    } = Object.assign({}, inputOptions);

    findAndReplace(tree, [
      [
        emojiRegex(),
        (emoji: string) => {
          const codePoint = emojiToCodePoint(
            !emoji.includes(String.fromCharCode(0x200D))
              ? emoji.replace(/\uFE0F/g, "")
              : emoji,
          );
          const url = `${source}/${codePoint}.${format}`;
          return h("img", {
            src: url,
            alt: emoji,
            draggable: "false",
            class: "inline-block align-text-bottom size-[1.2em] ff-gif",
            onerror: `this.replaceWith(document.createTextNode(${JSON.stringify(emoji)}))`,
          });
        },
      ],
    ]);
  };
}
