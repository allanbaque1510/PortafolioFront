import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseHome, ResponseProjects, ResponseService, ResponseWorkExperience } from '../interfaces/response/response';
import { Section } from '../interfaces/section';
import { SocialMedia } from '../interfaces/social-media';
@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  url:string= 'http://localhost/portafolio/public/api';
  constructor(private httpClient: HttpClient) { }
  private _sections!: Section[];
  private _currentSections: string = 'home';
  private _socialMedia: SocialMedia[] = [];
  get sections(){
    return this._sections
  }
  set sections(sections: Section[]){
    this._sections = sections
  }

  get currentSection(){
    return this._currentSections
  }
  set currentSection(cs:string){
    this._currentSections = cs
  }

  get socialMedia(){
    return this._socialMedia
  }
  set socialMedia(data: SocialMedia[] ){
    this._socialMedia =data 
  }



  
  getData(request?: { [key: string]: any } ): Observable<ResponseHome> {
    return this.httpClient.get<ResponseHome>(this.url + '/portafolio', {
      params: request
    });
  }
  
  getDataProjects(request?: { [key: string]: any } ): Observable<ResponseProjects> {
    return this.httpClient.get<ResponseProjects>(this.url + '/portafolio/projects', {
      params: request
    });
  }
  
  getDataWorkExperience(request?: { [key: string]: any } ): Observable<ResponseWorkExperience> {
    return this.httpClient.get<ResponseWorkExperience>(this.url + '/portafolio/work-experience', {
      params: request
    });
  }
  
  getDataServices(request?: { [key: string]: any } ): Observable<ResponseService> {
    return this.httpClient.get<ResponseService>(this.url + '/portafolio/services', {
      params: request
    });
  }
  

}
