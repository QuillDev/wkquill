import {WKPaginatedResponse} from "./types/WKResponse";
import {WKAllAssignmentsResponse, WKAssignment} from "./types/WKAssignment";
import {WKAllSubjectsResponse, WKSubject} from "./types/WKSubject";
import {WKAllSRSResponse, WKSRS, WKSRSStage} from "./types/WKSrs";
import {WKUser} from "./types/WKUser";

export class WaniClient {
    constructor(private token: string,
                private revision: string = "20170710",
                private baseURL: string = "https://api.wanikani.com/v2/"
    ) {
    }

    //TODO: Add query parameter modifiers

    //Grab all of things
    public getAllAssignments = async (): Promise<WKAssignment[]> => {
        return this.readPaginatedResponse<WKAllAssignmentsResponse, WKAssignment>(this.getEndpoint('assignments'));
    }

    public getAllSubjects = async (): Promise<WKSubject[]> => {
        return this.readPaginatedResponse<WKAllSubjectsResponse, WKSubject>(this.getEndpoint('subjects'));
    }

    public getAllSRSStages = async(): Promise<WKSRS[]> => {
        return this.readPaginatedResponse<WKAllSRSResponse, WKSRS>(this.getEndpoint('spaced_repetition_systems'));
    }

    public getUser = async(): Promise<WKUser> => {
        return (await fetch(this.getEndpoint('user'))
            .then((res) => res.json())) as WKUser;
    }

    private getHeaders = (): Record<string, string> => {
        return {
            "Wanikani-Revision": this.revision,
            "Authorization": `Bearer ${this.token}`
        }
    }

    private getEndpoint = (endpoint: string) => {
        return this.baseURL + endpoint;
    }

    /**
     * Read responses that have the paginated attribute
     * @param url the endpoint to hit
     */
    private readPaginatedResponse = async <Response extends WKPaginatedResponse<Result[]>, Result>(url: string): Promise<Result[]> => {
        const results = [];

        const init: RequestInit = {
            headers: {
                ...this.getHeaders()
            }
        }
        while (url) {
            const response: Response = await fetch(url, init)
                .then((res) => res.json())

            results.push(...response.data)
            url = response.pages.next_url;
        }
        return results;
    }
}