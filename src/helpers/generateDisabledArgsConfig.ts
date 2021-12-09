const alwaysDisabledArgs = ['ref']

const generateDisabledArgsConfig = (disabledArgs: string[]) =>
  Object.assign(
    {},
    ...[...disabledArgs, ...alwaysDisabledArgs].map((arg) => ({
      [arg]: { control: false }
    }))
  )

export default generateDisabledArgsConfig
