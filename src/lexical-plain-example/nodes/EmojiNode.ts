import { EditorConfig, NodeKey, TextNode } from "lexical";

export class EmojiNode extends TextNode {
  __className: string;

  static getType() {
    return "emoji";
  }

  static clone(node: any) {
    return new EmojiNode(node.__className, node.__text, node.__key);
  }

  constructor(className: string, text: string, key?: NodeKey) {
    super(text, key);
    this.__className = className;
  }

  createDOM(config: EditorConfig<Record<string, any>>) {
    const dom = document.createElement("span");
    const inner = super.createDOM(config);
    dom.className = this.__className;
    inner.className = "emoji-inner";
    dom.appendChild(inner);
    return dom;
  }

  updateDOM(prevNode: TextNode, dom: HTMLElement, config: EditorConfig<Record<string, any>>) {
    const inner = dom.firstChild as HTMLElement;
    if (inner === null) {
      return true;
    }
    super.updateDOM(prevNode, inner, config);
    return false;
  }
}

export function $isEmojiNode(node: any) {
  return node instanceof EmojiNode;
}

export function $createEmojiNode(className: string, emojiText: string) {
  return new EmojiNode(className, emojiText).setMode("token");
}
