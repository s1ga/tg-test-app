export interface TgButton {
    show(): void;
    hide(): void;
    setText(text: string): void;
    onClick(fn: Function): void;
    offClick(fn: Function): void;
    enable(): void;
    disable(): void;
}