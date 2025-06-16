import { Education } from "../education";
import { IService } from "../IService";
import { PersonalInformation } from "../personal-information";
import { Presentation } from "../presentation";
import { Project } from "../project";
import { Section } from "../section";
import { Skill } from "../skill";
import { SocialMedia } from "../social-media";
import { WorkExperience } from "../work-experience";

export interface ResponseHome {
  educations: Education[];
  presentation: Presentation;
  personalInformation: PersonalInformation;
  skills: Skill[];
  socialMedia: SocialMedia[];
  sections: Section[];
}

export interface ResponseProjects {
  sections: Section[];
  projects:Project[];
}

export interface ResponseWorkExperience {
  sections: Section[];
  workExperience:WorkExperience[];
}

export interface ResponseService {
  sections: Section[];
  services:IService[];
}

