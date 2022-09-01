<!-- This file's contents apply to every page -->

<!-- Import tailwind css via app.css -->
<script>
    import "../app.css";
</script>

<!-- Nav bar -->
<nav class = "relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
    <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
            <a class="text-xl text-black" href="/">Navbar</a>
            <!-- Left links -->
            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/resume">Resume</a>
            <a href="/projects">Project List</a>
            <a href="/contact">Contact</a>        

            <!-- <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
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
                <li>
                    <a href="/contact">Contact</a>        
                </li>
            </ul> -->
            <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->
    </div>
</nav>

<slot></slot>

<footer>
    <p>This is a footer.</p>
</footer>
