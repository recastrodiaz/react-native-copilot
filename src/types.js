// @flow
export type Step = {
  name: string,
  order: number,
  visible: boolean,
  target: React$Element,
  verticalPosition: 'bottom' | 'top' | undefined,
  wrapper: React$Element,
};

export type CopilotContext = {
  registerStep: (Step) => void,
  unregisterStep: (name: string) => void,
  getCurrentStep: () => Step,
}

export type valueXY = {
  x: number,
  y: number,
};

export type SvgMaskPathFn = (args: {
  size: Animated.valueXY,
  position: Animated.valueXY,
  canvasSize: {
    x: number,
    y: number
  },
  step: Step,
}) => string;
