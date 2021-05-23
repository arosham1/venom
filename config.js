//paste your token in the .env

module.exports = {
  token:   "ODAxNTY5Njc0MjQ4NzE2MzA4.YAil7g.KU6Nyvn7454L848UL7a-YsMqGCc",
  defaultPrefix: "+/",
  ownerID: "619170695267614720",
  _limits: "The following are defaults.",
  adminCanChangeLimits: false,
  limits: {
    user_removals: {
      per_minute: 3,
      per_hour: 24
    },
    role_creations: {
      per_minute: 2,
      per_hour: 24
    },
    channel_creations: {
      per_minute: 3,
      per_hour: 24
    },
    role_deletions: {
      per_minute: 2,
      per_hour: 23
    },
    channel_deletions: {
      per_minute: 3,
      per_hour:  24
    },
    unbans: {
      per_minute: 2,
      per_hour: 24
    }
  },
  _config: "The following are defaults.",
  config: {
    _null: "No options to configure currently."
  }
};
