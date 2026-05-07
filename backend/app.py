import os
from flask import request
from flask import Flask, jsonify,url_for
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/profile")
def profile():
    try:
        return jsonify({
            "name":"Ajay Maddineni",
            "image_url" : url_for('static', filename='profilePic.jpg'),
            "role":"Software Engineer/Frontend Web Developer",
            "location":"India",
            "about":"Entry-level developer who enjoys building real-world projects and learning new technologies. Passionate about creating user-friendly web applications and continuously improving my skills in software development. I am a quick learner and a team player, eager to contribute to innovative projects and grow in the field of software engineering."
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/about")
def about():
    try:
        return jsonify({})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/skills")
def skills():
    try:
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

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/projects")
def projects():
    try:
        all_projects = [
            {"title" : "Portfolio website","stack":"Flask + Reactjs","Description":"A personal portfolio website to showcase my skills, projects and contact information.","live_link":"https://ajaymaddineni-portfolio-dp5s.onrender.com/","repo_link":"https://github.com/Aj-02-m/My_portfolio","Status":"Completed"},
            
            {"title" : "BMI-Calculator","stack":"Flask + HTML + CSS","Description":"A web application that calculates Body Mass Index (BMI) based on user input of weight and height.","live_link":"https://bmicalcapp-htdvfebgdqbuc2fe.centralindia-01.azurewebsites.net/","repo_link":"https://github.com/Aj-02-m/BMI_Calculator-Flask-/tree/main","Status":"Completed"},

            {"title":"Bookstore Inventory Management Website","stack":"HTML + CSS + JavaScript","Description":"A web application to manage bookstore inventory with features like adding, updating, deleting books.","live_link":"https://blue-flower-0c67f2b1e.2.azurestaticapps.net/","repo_link":"https://github.com/Aj-02-m/BookStore-Using-CRUD/tree/main","Status":"Completed"},

            {"title":"Ajay-Electrical-Works","stack":"HTML + CSS","Description":"Business website for electrical services and contact details.","live_link":"https://blue-hill-0cdb99b00.1.azurestaticapps.net/","repo_link":"https://github.com/Aj-02-m/Ajay-Electrical-Works/tree/main","Status":"Completed"},

            {"title":"Zoo-Website","stack":"HTML + CSS + JavaScript + Bootstrap","Description":"A website for a zoo with information about animals, exhibits, and Tickets Information.","live_link":"https://aj-02-m.github.io/Zoo-Website/","repo_link":"https://github.com/Aj-02-m/Zoo-Website/tree/main","Status":"Completed"}
        ]
        return jsonify(all_projects)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

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

@app.route("/health")
def health():
    return jsonify({"ok":True,"message":"Server is healthy"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT",5000))
    app.run(host="0.0.0.0",port=port,debug = True)