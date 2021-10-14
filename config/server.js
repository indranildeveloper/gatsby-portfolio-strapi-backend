module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1339),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6ca75c3d682d2f043b2e84966d953df9'),
    },
  },
});
