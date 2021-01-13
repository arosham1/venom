//paste your token in the .env

module.exports = {
  token:   "NzkzOTMzMDc5NDQ5MzA1MTEx.X-zdzA.BWj_-kWnpsnAUgbh0sejCllOQy0",
  defaultPrefix: "?",
  ownerID: "",
  _limits: "The following are defaults.",
  adminCanChangeLimits: false,
  limits: {
    user_removals: {
      per_minute: 3,
      per_hour: 24
    },
    role_creations: {
      per_minute: 3,
      per_hour: 24
    },
    channel_creations: {
      per_minute: 3,
      per_hour: 24
    },
    role_deletions: {
      per_minute: 3,
      per_hour: 24
    },
    channel_deletions: {
      per_minute: 3,
      per_hour: 24
    },
    unbans: {
      per_minute: 3,
      per_hour: 24
    }
  },
  _config: "The following are defaults.",
  config: {
    _null: "No options to configure currently."
  }
};
