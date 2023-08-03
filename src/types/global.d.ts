export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface Employee {
    id: number;
    name: string;
    salary: number;
  }
  interface MessagePopup {
    title: string;
    detail?: string;
    type: "success" | "error" | "warning" | "info" | "question";
    afterConfirmTitle?: string;
    afterConfirmDetail?: string;
    afterConfirmType?: "success" | "error" | "warning" | "info" | "question";
    confirmButtonText?: string;
    onChange?: (value: string) => void | undefined;
    onClick?: (value: string) => void | undefined;
  }
  interface MessageAlertPopup {
    title: string;
    detail?: string;
    type: "success" | "error" | "warning" | "info" | "question";
    onClick?: (value: string) => void | undefined;
    position: "top-end" | "center" | "bottom-right";
  }
}
