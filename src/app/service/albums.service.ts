import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from '../model/album.model';
import {environment} from '../../environments/environment';

const API_ALBUMS_ENDPOINT = '/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private http: HttpClient
  ) { }

  public getPosts(): Observable<Album[]> {
    return this.http.get<Album[]>(`${environment.API_BASE}${API_ALBUMS_ENDPOINT}`);
  }
}
