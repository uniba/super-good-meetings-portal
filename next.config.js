module.exports = {
  /* ここにオプション設定を書きます */
  async redirects() {
    return [
      {
        source: "/news/:path*",
        destination: "/posts/:path*",
        permanent: true,
      },
    ];
  },
};
