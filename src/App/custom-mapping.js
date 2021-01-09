export default {
  components: {
    Button: {
      meta: {
        parameters: {
          width: {
            type: 'number',
          },
          height: {
            type: 'number',
          },
        },
        variantGroups: {
          shape: {
            rounded: { // <-- Register a `rounded` variant
              default: false,
            },
          },
        },
      },
      appearances: {
        filled: {
          mapping: {},
          variantGroups: {
            shape: {
              rounded: { // <-- Describes a `rounded` variant parameters
                width: 80,
                height: 80,
                iconWidth: 32,
                iconHeight: 32,
                borderRadius: 40,
                paddingHorizontal: 0,
                paddingVertical: 0,
              },
            },
          },
        },
      },
    },
  },
};
