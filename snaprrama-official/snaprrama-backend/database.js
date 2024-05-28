import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";


const pool = mysql.createPool({

    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getUsers() {

    const [users] = await pool.query("SELECT * FROM users")
    return users;

}

export async function getUserProfile() {

    const [userprofle] = await pool.query("SELECT * FROM userprofile")
    return userprofile;

}


export async function getSingleUser(UserID) {


    const [singleuser] = await pool.query( 
    `SELECT *
    FROM users
    WHERE UserID = ?`
    , [UserID])
    return singleuser;


}

export async function getSingleUserProfile(UserID) {


    const [singleuser] = await pool.query( 
    `SELECT *
    FROM userprofile
    WHERE UserID = ?`
    , [UserID])
    return singleuser;


}

export async function registerUser(username, password, email) {
    try {

        const [reguser] = await pool.query(
          `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`,
          [username, password, email]
        );
    
        const userId = reguser.insertId;

        const defaultImage = fs.readFileSync('../snaprrama/src/components/images/default-snaprr.png');
        const imageBuffer = Buffer.from(defaultImage, 'binary');
    
        await pool.query(
          `INSERT INTO userprofile (username, address, email, bio, UserID) VALUES (?, ?, ?, ?, ?)`,
          [username, null, email, null, imageBuffer]
        );
    
        return getSingleUserProfile(userId);
      } catch (error) {
        console.error('Error during registration and profile creation:', error);
        throw error;
      }
  }


export async function createUserProfile (username, address, email, bio) {


    const [reguser] = await pool.query( 
    `INSERT INTO userprofile (username, password, email)
    values (?, ?, ?, ?)`
    , [username, address, email, bio])   
    const id = reguser.insertId
    return getSingleUser(id);

}

export async function authenticateUser(username, password) {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        console.error('Error during authentication:', error);
        throw error;
    }
}
