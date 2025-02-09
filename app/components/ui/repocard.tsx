

function Card({reponame,urllink}:any){
  return<>
        <p className="mt-2 text-gray-300 text-sm md:text-lg">Name:{reponame}  <a className="text-blue-600" href={urllink}>{urllink}kjfddddddddddddddddddddddjkkkkkkkkkkk</a></p>
  </>
}

export function RepoCard(){

    return<>
        <div className="mt-6 text-center">
        <Card/>
      </div>
    </>
}