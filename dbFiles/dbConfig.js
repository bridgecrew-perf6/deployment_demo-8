const config = {
  user: "sa",
  password: "Ibml1234",
  server: "syn-amfamily",
  database: "synergetics_Report",
  options: {
    driver: "msnodesqlv8",
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
  },
  port: 1433,
};

module.exports = config;
