<script>
    import projectList from './projectList.json'
</script>

<section class="grid place-items-center">
    <h1 class="text-7xl pt-14 pb-14">Projects</h1>

    <div class="w-full grid grid-cols-2">
        <!-- Map projectList.json over multiple div's -->
        {#each projectList as {title, description, url}, index}
            <!-- key = {index} -->
            <div class="ml-10 card w-96 pr-5 pl-5 bg-base-100 shadow-xl mb-5">
                <!-- <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> -->
                <div class="card-body">
                    <h2 class="card-title"><a href={url}>{title}</a></h2>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>