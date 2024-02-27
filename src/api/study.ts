import { StudyExport, StudyImport } from '../types';
export class Study {
    constructor(private readonly fetcher: Function) {}
    
    /// Export a single chapter.
    public chapter({ studyId, chapterId, clocks = true, comments = true, variations = true, source = false, orientation = false }: StudyExport) {
        let params = new URLSearchParams({
            clocks: String(clocks),
            comments: String(comments),
            variations: String(variations),
            source: String(source),
            orientation: String(orientation)
        })
        return this.fetcher(`/study/${studyId}/${chapterId}.pgn?${params}`);
    }

    /// Export all chapters of a study.
    public chapters({ studyId, clocks = true, comments = true, variations = true, source = false, orientation = false }: StudyExport) {
        let params = new URLSearchParams({
            clocks: String(clocks),
            comments: String(comments),
            variations: String(variations),
            source: String(source),
            orientation: String(orientation)
        })
        return this.fetcher(`/study/${studyId}.pgn?${params}`);
    }

    /// Export all studies of a user.
    public studies({ username, clocks = true, comments = true, variations = true, source = false, orientation = false }: StudyExport) {
        let params = new URLSearchParams({
            clocks: String(clocks),
            comments: String(comments),
            variations: String(variations),
            source: String(source),
            orientation: String(orientation)
        })
        return this.fetcher(`/study/by/${username}/export.pgn?${params}`, 'get', undefined, false);
    }

    /// Retrieve only the study headers (metadata) of a study.
    public meta({ studyId }: { studyId: string }) {
        return this.fetcher(`/study/${studyId}.pgn`, 'head', undefined, false);
    }
    
    /// Import PGN into an existing study.
    public import({ studyId, name, pgn, orientation = 'white', variant = 'standard'  }: StudyImport) {
        let params = new URLSearchParams({ name, pgn, orientation, variant })
        return this.fetcher(`/study/${studyId}/import-pgn?${params}`, 'post', undefined, false);
    }

    // The study list is defined on `User`.

}
