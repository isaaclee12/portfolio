<script>
    import projectList from './projectList.json'
</script>

<section class="grid place-items-center">
    <h1 class="text-7xl pt-14 pb-14">Projects</h1>

    <div class="w-full grid grid-cols-2">
        <!-- Map projectList.json over multiple div's -->
        {#each projectList as {title, description, url}, index}
            <!-- key = {index} -->
            <div class="card bg-base-100 shadow-xl my-6 mx-12 p-10">
                <!-- <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> -->
                <div class="card-body">
                    <h2 class="card-title">
                        <a href={url} target="_blank"
                        class="text-xl text-sky-600 hover:text-sky-900 underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
                        >{title}</a>
                    </h2>
                    <br>
                    <p>{description}</p>
                    <!-- <div class="card-actions justify-end">
                        <button class="btn btn-primary">Check it out!</button>
                    </div> -->
                </div>
            </div>
        {/each}
    </div>
</section>