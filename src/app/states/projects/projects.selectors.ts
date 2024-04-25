import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ProjectState } from './projects.reducer';

export const selectProjects = (state: AppState) => state.projects;
export const selectAllProjects = createSelector(
  selectProjects,
  (state: ProjectState) => state.projects
);