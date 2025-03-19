<!-- This file's contents apply to every page -->

<!-- Import tailwind css via app.css -->
<script>
    import "../app.css";
	import projectList from '../projectList.json'
</script>

	<body class="is-preload">

		<!-- Header -->
			<section id="header">
                <!-- <h1>
                    <strong>Isaac Lee</strong> is a Full Stack Software Engineer with an <br />
                    enthusiastic drive for creating incredible products.
                </h1> -->
                <!-- <i class="fa-solid fa-user"></i> -->
				<div class="inner">
					<!-- <span class="icon solid major fa-cloud"></span> -->
					<h1>
						<strong>Isaac Lee</strong> is a Full Stack Software Engineer with an <br />
						enthusiastic drive for creating incredible products.
					</h1>
					<ul class="actions special">
						<li><a href="#one" class="button scrolly">Discover</a></li>
					</ul>
				</div>
			</section>
		
			<!-- One -->
			<section id="one" class="main style1">
				<div class="container">
					<div class="row gtr-150">
						<div class="col-6 col-12-medium">
							<header class="major">
								<h2>A Self-Starter, and a Go-Getter</h2>
							</header>
							<p>
								Planned, managed, and developed diverse projects. Mastered broad domain knowledge, technologies, and their uses.
								Demonstrated ability to adapt on the fly. Achieved and exceeded several product goals for different clients.
							</p>
						</div>
						<div class="col-6 col-12-medium imp-medium">
							<span class="image fit"><img src="assets/me_coding.gif" alt="" /></span>
						</div>
					</div>
				</div>
		
				<div class="container ">
					<div class="row gtr-150">
						<div class="col-6 col-12-medium imp-medium">
							<span class="image fit"><img src="assets/2U_XpertAssistantDemo.gif" alt="" /></span>
						</div>
						<div class="col-6 col-12-medium">
							<header class="major">
								<h2>Achievements</h2>
							</header>
							<ul>
								<li>Architected robust AI systems that <strong>increased revenue prospects by over 150% in 6 weeks</strong></li>
								<li>Designed and built incredible applications for a <strong>prestigious international education platform</strong></li>
								<li>Owned solutions to resolve problems that affected <strong>thousands of students around the world at a time</strong></li>
								<li>Mentored an intern engineer to foster an <strong>environment focused on learning and growth</strong></li>
							</ul>
						</div>
					</div>
				</div>
			</section>

		<!-- Two -->
			<section id="two" class="main style2">
                                <!-- <img src="assets/react-icon.svg" alt="react-icon"/> -->
				<div class="container">
					<div class="row gtr-150">
						<div class="col-6 col-12-medium">
							<ul class="major-icons">
								<li><span class="icon style1 major brands fa-node-js"></span></li>
								<li><span class="icon style2 major brands fa-react"></span></li>
								<li><span class="icon style3 major brands fa-python"></span></li>
								<li><span class="icon style4 major brands fa-github"></span></li>
								<li><span class="icon style5 major brands fa-docker"></span></li>
								<li><span class="icon style6 major fa-solid fa-snowflake"></span></li>
								<li><span class="icon style7 major brands fa-slack"></span></li>
								<li><span class="icon style8 major brands fa-figma"></span></li>
								<li><span class="icon style9 major brands fa-aws"></span></li>
								<li><span class="icon style10 major fa-solid fa-comments"></span></li>
								<li><span class="icon style11 major fa-solid fa-keyboard"></span></li>
								<li><span class="icon style12 major brands fa-cloudflare"></span></li>
							</ul>
						</div>
						<div class="col-6 col-12-medium">
							<header class="major">
								<h2>Master of Technologies, from Front-End to Back-End</h2>
							</header>
							<p>Mastered broad domain knowledge, technologies, and their uses. Demonstrated ability to adapt on the fly.</p>
							
							<div class="skills-list">
								<p>Languages:</p><p class="skills-list-item">Python, JavaScript, TypeScript, HTML, CSS, Java, C++</p>
								<p>Frameworks/Utilities:</p><p class="skills-list-item">Django, Generative AI (OpenAI), React, Next.js, Redux </p>
								<p>Databases:</p><p class="skills-list-item">SQL (PostgreSQL, MySQL), NoSQL (MongoDB)</p>
								<p>Software Development:</p><p class="skills-list-item">Development	APIs, UI/UX, Agile, Lean, Accessibility, A/B Testing</p>
								<p>Version Control & Ci/CD:</p><p class="skills-list-item">Control & CI/CD	Git/Github, GoCD, ArgoCD, Snowflake, Jenkins</p>
								<p>DevOps:</p><p class="skills-list-item">Docker, Kubernetes, AWS, Kafka, Terraform</p>
								<p>Other:</p><p class="skills-list-item">Slack, Jira, Figma, Written and Verbal Communication, Problem-Solving Skills</p>
							</div>
						
						</div>
					</div>
				</div>
			</section>

		<!-- Three -->
			<section id="three" class="main style1 special">
				<div class="container">
					<header class="major">
						<h2>Projects</h2>
					</header>
					<p>Isaac Lee has designed and developed several projects as a solo creator and a team player in remote Agile work environments.</p>


					<!-- ROW 1 -->
					<div class="row gtr-150">
						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="assets/ScheduleMaker.jpg" alt=""/></span>
							<h3>ScheduleMaker</h3>
							<p>A webtool designed to help small businesses keep track of their employee's schedules.  
								Created with 
								<strong>Javascript</strong>, 
								<strong>React</strong>, 
								<strong>Django</strong>, 
								& <strong>MySQL</strong>.</p>
							<ul class="actions special">
								<li><a href="https://github.com/isaaclee12/ScheduleMaker" target="_blank" class="button">View</a></li>
							</ul>
						</div>

						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="assets/twitbot.jpg" alt="" /></span>
							<h3>RL for Social Media Engagement</h3>
							<p>A reinforcement learning agent intended to maximize engagement on Twitter by means of liking, retweeting, following, and more. Created with <strong>Python</strong>.</p>
							<ul class="actions special">
								<li><a href="https://github.com/isaaclee12/rl-social-media-engagment" target="_blank" class="button">View</a></li>
							</ul>
						</div>

						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="assets/policemap.jpg" alt="" /></span>
							<h3>Racial Disparities In Police Killings</h3>
							<p>A data visualization of racial disparities in police killings by US state. Created with 
								<strong>HTML</strong>, 
								<strong>CSS</strong>, 
								<strong>Javascript</strong>, 
								<strong>Flask</strong>, 
								& <strong>MongoDB</strong>	.</p>
							<ul class="actions special">
								<li><a href="https://github.com/isaaclee12/racial-disparities-in-police-killings-by-state" target="_blank" class="button">View</a></li>
							</ul>
						</div>
					</div>


					<!-- ROW 2 -->
					<div class="row gtr-150">
						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="assets/chedd.jpg" alt=""/></span>
							<h3>CheddyBot</h3>
							<p>A project where I used Discord's bot API to create a bot account for my university's gaming club. Created in JavaScript.</p>
							<ul class="actions special">
								<li><a href="https://github.com/isaaclee12/CheddyBot" target="_blank" class="button">View</a></li>
							</ul>
						</div>

						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="assets/uvmstatsclub.png" alt="" /></span>
							<h3>UVM S&DS Club Website</h3>
							<p>A project where I used Django, HTML, and Boostrap to revise the website for UVM's Statistics and Data Science Club.</p>
							<ul class="actions special">
								<li><a href="https://github.com/isaaclee12/statistics-and-data-science-club-v2" target="_blank" class="button">View</a></li>
							</ul>
						</div>

						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="assets/four-elements.jpg" alt="" /></span>
							<h3>Leap Motion Element Game</h3>
							<p>An in-browser game that controlled by a Leap Motion device. Uses KNN to map hand gestures to elemental attacks. Made with JS</p>
							<ul class="actions special">
								<li><a href="https://github.com/isaaclee12/Leap_Motion_Element_Game" target="_blank" class="button">View</a></li>
							</ul>
						</div>
					</div>


					<!-- ROW 3 -->
					<div class="row gtr-150">
						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="assets/lock.jpg" alt=""/></span>
							<h3>Symmetric Cryptographer</h3>
							<p>A C++ program that can be used to encrypt and decrypt a string.</p>
							<ul class="actions special">
								<li><a href="https://github.com/isaaclee12/Symmetric-Cryptographer" target="_blank" class="button">View</a></li>
							</ul>
						</div>

						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="assets/foodfight.jpg" alt="" /></span>
							<h3>Food Role Playing Game</h3>
							<p>A role-playing game where you fight different foods. Made in C++</p>
							<ul class="actions special">
								<li><a href="https://github.com/isaaclee12/Food-Role-Playing-Game" target="_blank" class="button">View</a></li>
							</ul>
						</div>

						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="assets/schedule.jpg" alt="" /></span>
							<h3>Schedule-Compiler</h3>
							<p>A text program that helps people line up their schedules. Made in python.</p>
							<ul class="actions special">
								<li><a href="https://github.com/isaaclee12/Schedule-Compiler" target="_blank" class="button">View</a></li>
							</ul>
						</div>
					</div>

				</div>
			</section>

		<!-- Four -->
			<section id="four" class="main style2 special">
				<div class="container">
					<header class="major">
						<h2>Interested in reaching out?</h2>
					</header>
					<p>Please contact me via email or LinkedIn.</p>
					<ul class="actions special">
						<li><a href="mailto:isaac.wonha.lee@outlook.com" target="_blank" class="button wide primary">Email</a></li>
						<li><a href="https://www.linkedin.com/in/isaac-lee-621873133/" target="_blank" class="button wide">LinkedIn</a></li>
					</ul>
				</div>
			</section>

		<!-- Footer -->
			<section id="footer">
				<ul class="icons">
					<li><a href="https://twitter.com/isaacwonhalee" target="_blank" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
					<!-- <li><a href="#" target="_blank" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li> -->
					<li><a href="https://www.linkedin.com/in/isaac-lee-621873133/" target="_blank" class="icon brands alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
					<li><a href="https://github.com/isaaclee12" target="_blank" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
					<li><a href="mailto:isaac.wonha.lee@outlook.com" target="_blank" class="icon solid alt fa-envelope"><span class="label">Email</span></a></li>
				</ul>
				<ul class="copyright">
					<li>&copy; Isaac Lee</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
				</ul>
				<ul class="copyright">
					<!-- <li>This website is made in SvelteKit, hosted on my RaspberryPi in a Linux environment, and linked to my domain via Cloudflare.</li> -->
				</ul>
			</section>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>