<!-- This file's contents apply to every page -->



<nav>
    <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
        <a class="text-xl text-black" href="#">Navbar</a>
        <!-- Left links -->
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About Me</a>
            </li>
            <li>
                <a href="/resume">Resume</a>
            </li>
            <li>
                <a href="/projects">Project List</a>
            </li>
            <!-- Uncomment the below line once the project is finished -->
            <!-- <a href="/latest-project">Latest Project</a> -->
            <li>
                <a href="/contact">Contact</a>        
            </li>
        </ul>
        <!-- Left links -->
    </div>
</nav>

<slot></slot>

<footer>
    <p>This is a footer.</p>
</footer>
