import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDisplayShowExternalSvcData } from './idisplay-show-external-svc-data';
import { map } from 'rxjs/operators';
import { IDisplayShows } from './idisplay-shows';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DisplayShowsService {

  constructor(private httpClient: HttpClient) {    
   }

   getShowDetails(showName: string) : Observable<IDisplayShows> {
    return this.httpClient.get<IDisplayShowExternalSvcData>(`http://api.tvmaze.com/singlesearch/shows?q=${showName}`)
    .pipe(map(data => this.transformDataToIDisplayShows(data)))

   }
   transformDataToIDisplayShows(iDisplayShowExternalSvcData: IDisplayShowExternalSvcData) : IDisplayShows{
     return{
      name: iDisplayShowExternalSvcData.name,
      language: iDisplayShowExternalSvcData.language,
      genres: iDisplayShowExternalSvcData.genres,
      runtime: iDisplayShowExternalSvcData.runtime,
      status: iDisplayShowExternalSvcData.status,
      summary: iDisplayShowExternalSvcData.summary,
      image: iDisplayShowExternalSvcData.image.medium
     }
   }
}
