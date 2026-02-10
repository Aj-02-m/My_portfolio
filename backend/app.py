from flask import Flask, jsonify,url_for
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/profile")
def profile():
    return jsonify({
        "name":"Ajay Maddineni",
        "image_url" : url_for('static', filename='profilePic.jpg'),
        "role":"Software Engineer/Frontend Web Developer",
        "location":"India",
        "about":"Entry-level developer who enjoys building real-world projects and learning new technologies. Passionate about creating user-friendly web applications and continuously improving my skills in software development. I am a quick learner and a team player, eager to contribute to innovative projects and grow in the field of software engineering."
    })

@app.route("/api/about")
def about():
    return jsonify()

@app.route("/api/skills")
def skills():
    return jsonify([{
        "category" : "Programming Languages",
        "skills" : ["Python"]
        },
        {
        "category" : "Development",        
        "skills" : ["HTML", " CSS", " JavaScript", " Bootstrap", " Reactjs(Basic)", " Flask"]
        },
        {
        "category" : "Databases",
        "skills" : ["SQL", " RDBMS"]},
        {
        "category" : "Cloud & Deployment",
        "skills" : ["Azure"," Azure App Service"]},
        {
        "category" : "Dev & AI Tools",
        "skills" : ["Git", " GitHub", " VS Code", " ChatGPT", " Copilot"]},
        {
        "category" : "Testing",
        "skills" : ["Manual Testing", " Functional Testing", " Unit Testing", " pytest(Learning)"]
        },
        {
        "category" : "Soft Skills",
        "skills" : ["Communication", " Teamwork", " Problem Solving", " Adaptability"]
        }])

@app.route("/api/projects")
def projects():
    return jsonify([
        {"title":"SpendWise Budgeting Website","stack":"Flask + HTML + CSS + Bootstrap","Description":"A web application that helps users manage their finances by tracking income, expenses and analysing there spending patterns.","live_link":"/","repo_link":"/","Status":"Under Development"},

        {"title" : "Portfolio website","stack":"Flask + Reactjs","Description":"A personal portfolio website to showcase my skills, projects and contact information.","live_link":"","repo_link":"/","Status":"Completed"},

        {"title" : "BMI-Calculator","stack":"Flask + HTML + CSS","Description":"A web application that calculates Body Mass Index (BMI) based on user input of weight and height.","live_link":"https://bmicalcapp-htdvfebgdqbuc2fe.centralindia-01.azurewebsites.net/","repo_link":"https://github.com/Aj-02-m/BMI_Calculator-Flask-/tree/main","Status":"Completed"},

        {"title":"Bookstore Inventory Management Website","stack":"HTML + CSS + JavaScript","Description":"A web application to manage bookstore inventory with features like adding, updating, deleting books.","live_link":"https://blue-flower-0c67f2b1e.2.azurestaticapps.net/","repo_link":"https://github.com/Aj-02-m/BookStore-Using-CRUD/tree/main","Status":"Completed"},

        {"title":"Ajay-Electrical-Works","stack":"HTML + CSS","Description":"Business website for electrical services and contact details.","live_link":"https://blue-hill-0cdb99b00.1.azurestaticapps.net/","repo_link":"https://github.com/Aj-02-m/Ajay-Electrical-Works/tree/main","Status":"Completed"},

        {"title":"Zoo-Website","stack":"HTML + CSS + JavaScript + Bootstrap","Description":"A website for a zoo with information about animals, exhibits, and Tickets Information.","live_link":"https://aj-02-m.github.io/Zoo-Website/","repo_link":"https://github.com/Aj-02-m/Zoo-Website/tree/main","Status":"Completed"}
    ])

@app.route("/api/contact")
def contact():
    return jsonify({
        "name" : "Ajay Maddineni",
        "mobile" : "9381571984",
        "mail" : "maddineniajay59@gmail.com",
        "linkedin" : "https://www.linkedin.com/in/ajay-maddineni-7766a7177/",
        "github" : "https://github.com/Aj-02-m",
        "Address" : "Guntur, Andhra Pradesh, India"
    })

if __name__ == "__main__":
    app.run(debug = True)