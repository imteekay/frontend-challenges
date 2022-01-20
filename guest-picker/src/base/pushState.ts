type State = any;
type Url = string | null;

export type PushStateSignature = (state: State, url?: Url) => void;

export const pushState: PushStateSignature = (state, url) => {
  window.history.pushState(state, '', url);
};
