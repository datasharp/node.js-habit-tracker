function TopicsPage() {
    return (
<>
        <h2>Web Development Concepts</h2>

        <nav class="local">
            <a href="#servers">Web Servers</a>
            <a href="#fontendDesign">Frontend Design</a>
            <a href="#images">Optimizing Images</a>
            <a href="#favicons">Favicons</a>
            <a href="#javascript">JavaScript</a>
        </nav>

        <article id="servers">
            <h3>Web Servers</h3>
            
            <p> 
                The <strong>designated home page</strong> means that when we type in the URL, we will be redirected to that specific page 
                on the website and from there you can go to other pages on the website. 
                On the OSU engineering server, most servers have <strong>automatically said that '/' maps to index.html.</strong> The Apache web server, OSU's engineering server uses, uses this default to index.hmtl and that is why we go to this HTML file automatically.
            </p>
        
            <p>
                In the <strong>browsers Web Dev/Network tab locally</strong>, I can see the actual contents of the index.html file that I created alongside the Network tools. It shows the index.html with a status of 200, and a main.css and main.js files that have a failed status. Using the web server link, I can see the contents appearing through the same HTML file. But I also see an icon appearing in the tab bar. Also, in the Headers of the HTML file section, I see that the <strong>Request URL for the web server</strong> shows that we are connecting to an HTTPS server. In the same area locally, I can see that we are connecting to a file, instead of an HTTPS.
            </p>
        
            <p>
                The reason the favicon.ico file has a <strong>status of 200</strong> is because that is referring to the OSU icon that is being displayed at the top of the tab. When connecting to the engineering server, the browser checks for specific files and since we successfully retrieved that icon to display, we see status 200. As for main.js and main.css, we see <strong>404 Error</strong> for the status of those files because we are checking in the folder for those files, but they are not found. This is because we have not created a main.js file or a main.css file.  
            </p>
        
            <p>
                https://web.engr.oregonstate.edu/~sharkayl/a1-sharkayl The scheme is the “HTTPS”. The subdomain is “web.” The Host Domain is “engr.oregonstate.edu” The Resource Path is /~sharkayl/a1-sharkayl and that is pointing that file in the directory.
            </p>

        </article>


        <article id="fontendDesign">
            <h3> Frontend Design </h3>

            <p>
                <strong>Frontend Design</strong> aims to provide users with an experience appropriate to who they are and what they are doing. It involves the entire experience, as in the graphical user interface, visual design of the page, and anything that may see or do while visiting and interacting with that page. It uses multiple areas of 
                the website or application to provide this. Color is used to accentuate the brand as well as make sure to provide accessibility in terms of making sure color-blind people have access to the material. Meaning perhaps maybe dark green text over dark blue would be inaccessible and thereby off limits. Media is used to further engage the audience and showcase examples. Media pieces are compressed and put in spots that are easily accessible. This helps prevents long load times. 
            </p>

            <p>
                <dl>
                    <dt><strong>Effective</strong></dt>    
                    <dd>
                        This means that the user meets their goal when interacting with the system.
                    </dd>
    
                    <dt><strong>Efficient</strong></dt>
                    <dd>
                        This accounts for the numbers of steps required for the user to achieve their mission. Efficient implies that they achieve their goal quickly. 
                    </dd>
    
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>
                        This means that any new user should be able to navigate and find their goals with little 
                        effort while being able to remember it for next time. 
                    </dd>
    
                    <dt><strong>Error-free</strong></dt>
                    <dd>
                        To achieve this, the user's common errors must be learned to avoid accessibility and availability issues.
                    </dd>
    
                    <dt><strong>Enjoyable or engaging</strong></dt>
                    <dd>
                        This implies that the user will come back, due to the enjoyment of the experience.
                    </dd>
                </dl>
            </p>
            
            <p>
                The <strong>header tag</strong> gives the page a banner, which is usually the name or publisher of the application or website.
                It also helps the reader understand that are on the same website, when clicking around. 

                The <strong>nav tag's</strong> purpose is to create a block of links that take a user from the current page to other pages of the same
                website or application. 

                The <strong>main tag</strong> is the tag that holds the main content. For example, much of this writing, here in this file, is within the 
                main tag. 

                The <strong>section tag</strong> is used to create a grouping of related content. This typically has its own heading.
                
                The <strong>article tag</strong> is inside the section tag, and it denotes a smaller sub topic within the larger section topic. 

                The <strong>footer tag</strong> is what will usually hold the legal information as well as contact information for that website or application. 
            
            </p>
            
            <p>
        
                <ol>
                    <li>
                        <strong>Anchors link</strong> users to external and internal content.
                        Navigation helps achieve this in a user-friendly fashion by providing users with a button like linking experience. 
                        The nav block will give us page-to-page, section-to-section, or article-to-article groups of anchors using relative paths. A relative path points to a location in the same URL that the hosting website is at. So we are in the same directory, meaning that this type of URL is best for <strong>internal anchors</strong>. So an example of this would be if you were using a website to search for books. Perhaps there is a navigation block on that website that will send you to different points on that same website, such as fiction or nonfiction books. The key here is that you stay on the website or application. 

                    </li>
                    
                    <li>
                        In an <strong>external anchor</strong>, we see 'a' followed by href to denote the link. The link is external to the application or website that this code is on. Absolute paths are the complete URL, which includes the scheme, subdomains, domain, directory/folder, and file names. This is why this type of URL is best for <strong>external anchors</strong>. 
                    </li>

                    <li>
                        In an <strong>internal anchor</strong>, we have 'a' followed by href attribute, but instead of denoting a link, 
                        we now see that it denotes an ID from the current website and same page. 
                    </li>

                  </ol>
                </p>
        </article>

        <article id="images">
            <h3> Optimizing Images </h3>
            <p>
                The 6 major specifications of images for the web are firstly, having a descriptive file name. This is because we want to increase <strong>search engine optimization (SEO)</strong>. This means that our images will be able to be more easily searched and help the website get more traffic, which is important to many businesses. Second, we want a small file size for the images. This is important because if the files are too large, that will increase load time. As a part of design, users want fast load times. Another part of having fast load times is having exact dimensions for the image. This means, for example, not having a picture fit in a spot that has smaller dimensions than that image. Another image specification is having a correct file format. Different things require different formats, for example, screenshots might be best in PNG format while landscape photography might best be suited for JPG. Another thing to consider is having a reduced resolution. We can provide image sizes based on monitor resolutions, which might optimize that area. Lastly, picking a right color mode is very important for branding and/or guidelines. There are often many rules that front end developers must follow when choosing colors. 
            
            </p>
            <p>
                The photos, we might want to use <strong>JPG or WebP</strong> file formats. WebP will give us great compression for photographic images while giving good quality. JPGs give us millions of colors and great detail. They will also allow us to compress these photos well for quicker load times. 
                For line art, we might want to go with <strong>PNG</strong> format. The line art might benefit from the true transparency PNG offers, as well as PNG being the best for shapes and line art. <strong>SVG</strong> might also be a good option here because since the graphics are mathematically-derived, the graphics are crisp and clear for line art.
            </p>
        </article>

        <article id="favicons">
            <h3> Favicons </h3>
            <p> 
                <strong>Favicons</strong> are used by browsers and devices to quickly identify that site. For example, one might see a recognizable icon in the tab bar of a popular website and immediately recognize where they are. It is also an important part of branding. 
                The favicon files are added to the root of a project folder and from here, a set of link tags are put into the HTML file where they point to the files.
                Favicons usually come in <strong>PNG</strong> file formats because they are often times line art or use transparency.
            </p>
        </article>

        <article id="javascript">
            <h3> JavaScript </h3>
                <p>
                    The main data types in JavaScript are numbers, Boolean values, strings, symbols, special values undefined or null, and objects. 
                    Numbers are numeric values that can be used for arithmetic. These can be automatically converted to strings in JavaScript, but it's strongly advised to do conversions yourself.
                    Boolean values are True and False values. 
                    Null and undefined are values representing absence of values. We get undefined when we declare variables without initializing them, when functions are called without the correct number of parameters, or when functions don't return a value. 
                    Strings are enclosed in double or single quotations and denote a sequence of characters not used for arithmetic.  
                </p>

                <p>
                    Objects are sets of name-value pairs. These allow us the ability to organize information better. They assist in CRUD operations, such as adding, updating and deleting. They also allow better readability by encapsulating related data in a single entity. 

                    Arrays are list like data structures that allow us to store information. Arrays make it easy to iterate through information in order to find out more about the object. They also allow us to access different elements using indexing methods. This lets us access information easily and efficiently.

                    JSON is JavaScript Object Notation and is a data interchange format that allows different computer and programming languages to easily parse through and interpret data. This is used when sending data through different applications that may be using different types of code or programming languages to gather the data and be able to work with it. 
                </p>
                
                <p>
                    Conditionals allow us to make decisions based on user input and other factors. For example, with if statements, we can have branching code that can account for different possibilities. This is used for multitudes of use cases. 
                    Loops allow us to perform the same code over and over again based on a condition. So for example, if we want to loop through all the items in a list in order to print each item, we can use a loop. 
                </p>
                
                <p>
                    Object-oriented programming is a coding paradigm where the coder thinks and codes using objects. They define objects, classes, and behaviors that allow for a more modular and organized approach. The basic building block are the objects that encapsulate data and methods. The methods are the different function, behaviors, that actually perform actions. The classes act as the blueprint for different objects within that class. Object-oriented programming helps the coder achieve code that is easier to manage, read, and scalable. 
                </p>

                <p>
                    Functional programming is using functions to perform actions in the code. With a function, we can have parameters, and the code that performs the actions on those parameters. They also provide us an output. With a function, there will be inputs and outputs. This approach helps us minimize side effects, which are effects that are unwanted additions to the actions that we do want. 
                </p>

        </article>

</>
    );
}
export default TopicsPage;