// // let slider = document.getElementById("slider");
// let topicsel = document.getElementById("topicsel");
// // let sw = 8;

// topicsel.addEventListener("mouseenter",function (evt) {
//      slider.style.display="block";
//      slider.style.left = evt.clientX - (sw/2) + "px";
//      slider.style.right = "auto";
//  });

// topicsel.addEventListener("mouseleave",function () {
//      slider.style.display="none";
//  });

let para1 = document.getElementById("topic-para1");

let name = document.getElementById("topic-name");

for (let topic of document.getElementsByClassName("topic-item")){
    topic.addEventListener('click', function(){
        for(let ttopic of document.getElementsByClassName("topic-item")){
            ttopic.style.fontWeight = "400";
        }

        if(this.innerHTML == "How will you continue learning about computer science?"){
            this.style.fontWeight = "700";
            base();
            q1();
        }
        // else if(this.innerHTML == "Recursion"){
        //     this.style.fontWeight = "700";
        //     base();
        //     rec();
        // }
        else if(this.innerHTML == "What does it mean to have good programming practices?"){
            this.style.fontWeight = "700";
            base();
            q2();
        }
        else if(this.innerHTML == "Summarize your experience with Khan Academy"){
            this.style.fontWeight = "700";
            base();
            q3();
        }
    })

    // topic.addEventListener("mouseenter", function(){
    //     this.style.backgroundColor = "#cfcbcb";
    // })

    // topic.addEventListener("mouseleave", function(){
    //     this.style.backgroundColor = "inherit";
    // })
}

function base(){
    for(let topic of document.getElementsByClassName("top-line")){
        topic.style.display="none";
    }
}

function q1(){
    name.innerHTML = "How will you continue learning about computer science?";
    para1.innerHTML = ' As we continue learning about computer science, it is important to expand our perspectives on what we consider programming to be. Achieving this goal can be done in multiple ways, such as using resources like Codecademy to improve our understanding of the programming languages we are familiar with. We can also start to expand our knowledge of different languages, as each language presents different views and is used for different applications of programming. For example, popular game development languages such as unity and c# offer an entirely different experience of programming as opposed to the web-centred languages that many individuals are comfortable with. Furthermore, to continue learning about computer science requires engaging our perspective with others. Whether it is through Github, hackathons, or simply as friends, actively involving yourself with different communities serves as a great way to learn more about what computer science has to offer. Our own perspective can only bring us so far, and the world of computer science would be nearly impossible to understand with just one mind. Therefore, it is important to consider collaboration in our pursuit of knowledge, as these experiences will define how we interpret what programming really is. \n\n Personally, I believe that the approach you choose to continue learning about computer science is different for everyone. The first thing that I would like to work on is starting a different language such as unity, as a game-oriented language like this would not only offer me a different view on programming in general but will also allow me to work on something that I am passionate about. I have always admired how programming is connected to art, and building games, worlds, and visualizations through code is an amazing way for me to express myself through computer science. Additionally, I will also continue to engage in computer science physically. This not only includes hackathons and competitions but also in other forms, such as the Rubix cube. Cubing offers an opportunity to learn about computer science from a perspective many people might not see, and I know that, with enough time, I can start to better understand the nature of algorithms through this community. Ultimately, there are an infinite amount of paths to continue learning about computer science. ';

    para1.style.display = "inherit";

}


function q2(){
    name.innerHTML = "What does it mean to have good programming practices?";
    para1.innerHTML = "To have good programming practices generally involves the idea of organization. To begin, commenting and writing efficient and neat code is commonly accepted as a good general coding practice. Allowing others, as well as your future self, to be able to read your program and determine how it works is important when we want to build and expand a program. Additionally, version control is also considered to be a good programming practice, as doing so further aids us when expanding on code and ideas. Essentially, version control is what allows us to understand the changes that occurred during the development of a project, which can give others a better apprehension of the program in general. Doing so also allows us to fall back on previous versions of our code, as there are many situations, in which the current version we are trying to improve, may also break. Pseudocode is also another way to improve our organization of code, as mapping out and visualizing what our code is actually doing can help us write code more effectively. Ultimately, the organization of our thoughts is what defines good programming practices. \n\n Personally, having good programming practices also includes not only the physical aspects listed beforehand but also the mindset we carry. When we work with thousands of lines of code, it is often easy for us to lose focus on all our different goals. Therefore, it is important to understand the importance of goals themselves. For example, when working on a project such as a hackathon, we must consider not only the code we are actively writing but also every other aspect of the project. From my perspective, it is always important to consider where we are in the development of a program and how the code we write will relate to our future development of the program. This programming practice, along with the others mentioned above, help us achieve the goals we set for ourselves when we work with computer science. ";


    para1.style.display = "inherit";


}



function q3(){
    name.innerHTML = "Summarize your experience with Khan Academy";
    para1.innerHTML = "The Khan Academy experience provides a variety of tools for us to learn about computer science. These include a mixture of video lessons, coding challenges, personal projects, and other documents to develop our understanding of computer science. To begin, the video lessons are a great source of explaining concepts, as well as engaging the user with the material at hand. Providing the user, with both a visual and auditory method of learning, video lessons build the foundation of what the user learns. These lessons synthesize perfectly with the challenges, as these provide hands-on engagement with code, and test the user on the knowledge they gain. Finally, projects not only test the user on coding principles but also allows the user to express what they learned in a creative and practical manner, along with adding uniuqe twists to the concetps. Khan academy also acts as a community that's driven by helping others learn, as the platform offers many resources to communicate with experts and other users when we may struggle with certain concepts. \n\n My experience with Khan Academy has been positive overall, as this platform helped me the most to understand and work through complex concepts. In particular, the best part of Khan Academy, from my perspective, is the brilliance of its learning structure. Going through lessons, challenges, and projects provided me with a workflow that involved almost everything I could ask for when learning about computer science, as these different mediums allowed me to work with code logically, creatively, and thoroughly. My only critique is that the platform sometimes ends up being lazy, as there are multiple parts of the course that I found to be mindless paragraphs of reading that may or may not have benefitted me. However, I still feel as if I accomplished a lot of growth in computer science through the use of Khan Academy.";


    para1.style.display = "inherit";


}