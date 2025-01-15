import { Injectable, signal } from '@angular/core';
  import { CompanyMissionDataChallenges, CompanyTabsHeroSections, CompanyMissionStatement, CompanyVisionDialogue, CompanyOurTeamMembers, CompanyMember, CompanyAboutUsContent, CompanyAboutUsTransform, CompanyAboutUsYears , } from '../../core/interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AlgoseekApiService } from './algoseek-api.service';
import { Observable } from 'rxjs';
import { ApiResponse } from './home.service';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(
    private apiService: AlgoseekApiService,
    private http: HttpClient,
  ) {}
  private createSignal<T>(defaultValue: T) {
    return signal<T>(defaultValue);
  }
  ourVisionDialogueContent = this.createSignal<CompanyVisionDialogue[]>([]);
  ourMissionStatementContent = this.createSignal<CompanyMissionStatement[]>([]);
  ourTeamMembersContent = this.createSignal<CompanyOurTeamMembers>({});
  ourMembersContent = this.createSignal<CompanyMember[]>([]);
  ourTeamHeroContent = this.createSignal<CompanyTabsHeroSections>({ title: '', subtitle: '' });
  aboutUsContent = this.createSignal<CompanyAboutUsContent>({});
  aboutUsHeroContent = this.createSignal<CompanyTabsHeroSections>({})
  aboutUsYearsContent = this.createSignal<CompanyAboutUsYears[]>([]);
  aboutUsTransformContent = this.createSignal<CompanyAboutUsTransform>({
    title :'',
    blocks:[]
  });
  ourVisionHeroContent = this.createSignal<CompanyTabsHeroSections>({
    id: 1,
    title: '',
    subtitle: '',
    description: '',
  });
  ourMissionHeroContent = this.createSignal<CompanyTabsHeroSections>({
    id: 1,
    title: '',
    subtitle: '',
    description: '',
  });
  ourMissionDataChallengesContent = this.createSignal<CompanyMissionDataChallenges>({
    title: '',
    content: '',
  });

  private fetchData<T>(endpoint: string, fields: string[]) {
    let params = new HttpParams().set('fields', fields.join(','));
    const url = `${this.apiService._BASE_URL}/items/${endpoint}`;
    return this.http.get<any>(url, { headers: this.apiService.getHeaders(), params });
  }

  getOurVisionHeroContent(): Observable<ApiResponse<CompanyTabsHeroSections[]>> {
    return this.fetchData<CompanyTabsHeroSections>('our_vision_hero', ['id', 'title', 'subtitle', 'description']);
  }
  getOurVisionDialogueContent(): Observable<ApiResponse<CompanyVisionDialogue[]>> {
    return this.fetchData<CompanyVisionDialogue>('our_vision_dialogue', ['id','speaker','order','text','speaker_image']);
  }
  getOurMissionHeroContent(): Observable<ApiResponse<CompanyTabsHeroSections[]>> {
    return this.fetchData<CompanyTabsHeroSections>('our_mission_hero', ['id', 'title', 'subtitle', 'description']);
  }
  getOurMissionStatementContent(): Observable<ApiResponse<CompanyMissionStatement[]>> {
    return this.fetchData<CompanyMissionStatement>('our_mission_statement', ['id','title','subtitle','order','content']);
  }
  getOurMissionDataChallengesContent(): Observable<ApiResponse<CompanyMissionStatement[]>> {
    return this.fetchData<CompanyMissionStatement>('our_mission_data_challenges', ['title','content']);
  }
  getOurTeamHeroContent(): Observable<ApiResponse<CompanyTabsHeroSections[]>> {
    return this.fetchData<CompanyTabsHeroSections>('our_team_hero', ['title', 'subtitle']);
  }
  getOurTeamMembersContent(): Observable<ApiResponse<CompanyOurTeamMembers[]>> {
    return this.fetchData<CompanyOurTeamMembers>('our_team_members', ['id','title', 'members']);
  }
  getOurMemberContent(): Observable<ApiResponse<CompanyMember[]>> {
    return this.fetchData<CompanyMember>('members', ["id","name","nickname","photo","occupation","order","description"]);
  }
  getAboutUsHeroContent(): Observable<ApiResponse<CompanyTabsHeroSections[]>> {
    return this.fetchData<CompanyTabsHeroSections>('about_us_hero', ['title', 'subtitle']);
  }
  getAboutUsContent(): Observable<ApiResponse<CompanyTabsHeroSections[]>> {
    return this.fetchData<CompanyTabsHeroSections>('about_us_algoseek', ["title","quote","content"]);
  }
  
  getAboutUsTransformContent(): Observable<ApiResponse<CompanyAboutUsTransform[]>> {
    return this.fetchData<CompanyAboutUsTransform>('about_us_transform', [
      "title",
      " blocks.about_us_transform_blocks_id.order",
      "blocks.about_us_transform_blocks_id.content"]);
    }
    getAboutUsYearsContent(): Observable<ApiResponse<CompanyAboutUsYears[]>> {
      return this.fetchData<CompanyAboutUsYears>('about_us_years', ["year","description","order"]);
    }
  
}
