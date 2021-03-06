import ClubHubClient from '../client';
import Section from '../models/section';
export default class SectionService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getSections: () => Promise<Section.Model[]>;
    createSection: (section: Section.Model) => Promise<Section.Model>;
    updateSection: (section: Section.Model) => Promise<Section.Model>;
    deleteSection: (sectionID: string) => Promise<void>;
}
