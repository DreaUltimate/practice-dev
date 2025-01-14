<?php
    header('Content-type: text/css');
?>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'arial';
}
body {
    padding-top: 60px;
}
form, .container {
    border-radius: 20px;
    padding: 20px 20px;
    margin: 0px auto;
    width: 400px;
    height: 450px;
    border: 1px solid black;
    text-align: end;
}
.container {
    text-align: left;
}
    h1 {
        margin-bottom: 20px;
        text-align: center;
    }
    label, select {
        font-size:18x;
        font-weight: bold;
        width: 200px;
        display: block;
        margin-bottom: 10px;
        text-align: start;
    }
    input {
        width: 151px;
        font-size:14px;
        margin-bottom: 20px;
        display: block;
    }
    #first_name {
        height: 25px;
        margin-bottom: 10px;
    }
    select {
        font-size:16px;
        font-weight: normal;
    }
    textarea {
        display: block;
        width: fixed;
        width: 80%;
        height: 80px;
        margin-bottom: 10px;
    }
    #submit {
        width: 80px;
        margin-top: 10px ;
        display: inline-block;
        position-right:2px;
        font-size: 15px;
        padding: 4px;
    }
.values {
    height: 150px;
    margin-bottom: 20px;
}
    .values div {
        height: 100%;
        text-align: start;
        width: 49.30%;
        vertical-align: top;
        display: inline-block;
    }
h4 {
    font-size: 15px;
    margin: 20px 0px;
}
p {
    text-align: start;
    font-size: 18px;
    margin-bottom: 10px;
}
#description {
    border: 1px solid black;  
    height: 90px;
    overflow-y: scroll;
    font-size: 16px;
}
a {
    display: inline-block;
    text-decoration: none;
    color: black;
    border: 1px solid black; 
    padding: 4px;
}