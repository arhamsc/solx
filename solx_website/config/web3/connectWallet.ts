// import Web3 from "web3";

// let instance: Web3Singleton;
// let web3: Web3;

// class Web3Singleton {
//   constructor() {
//     if (web3) {
//       throw new Error("Instance exists.");
//     }

//     instance = this;
//     // this.connectWallet();
//   }

//   public get web3(): Web3 {
//     return web3;
//   }

//   public async connectWallet() {
//     if (
//       typeof window !== "undefined" &&
//       typeof (window as any).ethereum !== "undefined"
//     ) {
//       // We are in the browser and metamask is running.
//       await (window as any).ethereum.request({ method: "eth_requestAccounts" });
//       web3 = new Web3((window as any).ethereum);
//       location.reload();
//     } else {
//       // We are on the server *OR* the user is not running metamask
//       const provider = new Web3.providers.HttpProvider(
//         // "https://goerli.infura.io/v3/b287878820f242b1b8dcb4abe32ab751",
//         "http://127.0.0.1:7545",
//       );
//       web3 = new Web3(provider);
//     }
//   }

//   public checkForWeb3() {
    
//     if (typeof window !== "undefined" && typeof (window as any)?.ethereum !== "undefined") {
//       return (window as any).ethereum._state.accounts.length > 0;
//     }
//     return false;
//   }
// }

// const Web3Instance = Object.freeze(new Web3Singleton());

// export default Web3Instance;

// // export default web3;

// /*

// import { Connection, createConnection } from "mysql";

// let instance: DBConnection;
// let connection: Connection;

// class DBConnection {
//     constructor() {
//         if (instance) {
//             throw new Error("New instance cannot be created.");
//         }
//         try {
//             connection = createConnection({
//                 host: "127.0.0.1",
//                 user: process.env.MYSQL_USERNAME,
//                 password: process.env.MYSQL_PASSWORD,
//                 database: "emergence",
//             });
//             console.log("Connected to MySQL");
//         } catch (error) {
//             console.log(error);
//         }
//         instance = this;
//     }

//     getConnection() {
//         return connection;
//     }

//     connectToDB() {
//         connection.connect();
//         return;
//     }

//     disconnectFromDB() {
//         connection.end();
//         return;
//     }
// }

// const DBConnectionSingleton = Object.freeze(new DBConnection());

// export default DBConnectionSingleton;

// */
