



const Projects =  ({ projects }) => {



    return (

        <main>
            {projects.map((project, index) => {
                return (
                    <>
                        <p>project.name</p>
                        <p>project.picture</p>
                    </>
                )
            })}
        </main>
    )
}

export default Projects