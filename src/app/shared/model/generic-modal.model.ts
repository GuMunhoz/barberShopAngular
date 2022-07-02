import { Type } from "@angular/core";

class ButtonDialog {
  visible: boolean;
  caption: string;
  action: null | {};
  disabled?: boolean;
}

type FAsync = () => Promise<any>;
export interface GenericModalModel {
  error: boolean,
  title: string,
  content: {
    text: string,
    simple: string,
    complex: {
      component: Type<any>,
      params: {},
    },
  },
  buttons: {
    delete: ButtonDialog,
    cancel: ButtonDialog,
    save: ButtonDialog,
    confirm: ButtonDialog,
  },
  async: {
    action: FAsync,
  }
}
