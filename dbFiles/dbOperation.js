const config = require("./dbConfig");

sql = require("mssql/msnodesqlv8");
console.log("Application started");

const getClaims = async (claim) => {
  try {
    const start_date = claim.start_date; 
    const end_date = claim.end_date;
    const end_dateN = claim.end_dateNOD;
    const end_dateU = claim.end_dateUser;
    const end_dateQ = claim.end_dateQA;

    var strUser = claim.fieldUserName;
    var strNod = claim.fieldEndName;    
    var strQA = claim.fieldQAName; 
     

    let pool = await sql.connect(config);

    console.log(" SQL database connection established for strUser = " + strUser);
    console.log(" SQL database connection established for strNod = " + strNod);
    console.log(" SQL database connection established for strQA = " + strQA);

    //console.log(claim);  
    console.log(" start date = " + start_date);
    console.log(" end date = " + end_date);
    console.log(" end date User = " + end_dateU);
    console.log(" end date NOD = " + end_dateN);
    console.log(" end date QA = " + end_dateQ);

    if(strUser === 'end_dateUser') {
      console.log("  It is a user report ");

      let claims = await pool
        .request()
        .query("SELECT * from throughput_common_data WHERE cast (start_time as date) >= '" + start_date + "' and cast (end_time as date) <= '" + end_dateU + "'");
        //.query("SELECT * from throughput_common_data WHERE cast (start_time as date) >= '2022-02-01' and cast (end_time as date) <= '2022-02-15'");
      console.log("SELECT * from throughput_common_data WHERE cast (start_time as date) >= '" + start_date + "' and cast (end_time as date) <= '" + end_dateU + "'");
      console.log("Query performed");
      //console.log(claims);
      strUser = '';
      return claims;

    } else  if(strNod === 'end_dateNOD') {
      console.log("  It is a nod report ");

      let claims = await pool
        .request()
        .query("SELECT * from throughput_common_data WHERE cast (start_time as date) >= '" + start_date + "' and cast (end_time as date) <= '" + end_dateN + "'");
      
      console.log("Query performed");
      //console.log(claims);
      strNOD = '';
      return claims;

    } else  if(strQA === 'end_dateQA') {
      console.log("  It is a qa report ");

      let claims = await pool
        .request()
        .query("SELECT * from throughput_common_data WHERE cast (start_time as date) >= '" + start_date + "' and cast (end_time as date) <= '" + end_dateQ + "'");
      
      console.log("Query performed");
      //console.log(claims);
      strQA = '';
      return claims;

    } else {
      if(end_date != null) {
        let claims = await pool
        .request()
        //.query("SELECT * from Claim WHERE batch_number = ${batch_number}");
        //.query("SELECT * from user_operations WHERE end_date = '" + end_date + "'");
        .query("SELECT * from throughput_common_data WHERE cast (start_time as date) >= '" + start_date + "' and cast (end_time as date) <= '" + end_date + "'");
      
       console.log("Query performed");
        //console.log(claims);
      
        return claims;
      }
    }    
      
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getClaims,
};
