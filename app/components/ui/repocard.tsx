
import { useRepoStore } from "@/app/store/store"
import { useLangStore } from "@/app/store/store";

function Card({reponame,urllink,language}:any){
  return<>
        <p className="mt-2 text-gray-300 text-sm md:text-lg">Repo Name : {reponame}    Language:{language} <br /> <a className="text-blue-600" href={urllink}>{urllink}</a></p>
  </>
}

function LCard({language,percentage}:any){
  return<>
    <p className="mt-2 text-gray-300 text-sm md:text-lg">Language : {language}    percentage:{percentage} </p>
  </>
}

export function RepoCard(){
    
    const {repoDetails}=useRepoStore();
    return<>
        <div className="mt-6 text-center">
        { repoDetails &&
          repoDetails.map((repo)=>(
            <Card key={repo.name} reponame={repo.name} urllink={repo.url} language={repo.language}/>
          ))
        }
      </div>
    </>
}

export function LangCard(){
  const {langDetails}=useLangStore();
  return<>
  {  langDetails &&
          langDetails.map((lang)=>(
            <LCard key={lang.language}  language={lang.language} percentage={lang.percentage}/>
          ))
      }
  </>
}