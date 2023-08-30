module.exports = {
  /* ここにオプション設定を書きます */
  async redirects() {
    return [
      {
        source: "/posts/:path*",
        destination: "/news/:path*",
        permanent: true,
      },
    ];
  },
};
