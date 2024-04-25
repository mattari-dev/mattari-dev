import { createReducer, on } from '@ngrx/store';
import { Project } from '../../core/models/project.model';
import { addProject, removeProject, loadProjects } from './projects.actions';
import { Status } from '../../core/enums/status';

export interface ProjectState {
  projects: Project[];
  error: string | null;
  status: Status
}

export const initialState: ProjectState = {
  projects: [],
  error: null,
  status: Status.PENDING
}

export const projectReducer = createReducer(
  initialState,
  on(addProject, (state, { content }) => ({
    ...state,
    projects: [...state.projects, { id: Date.now().toString(), content: content }]
  })),
  on(removeProject, (state, { id }) => ({
    ...state,
    projects: state.projects.filter((project) => project.id != id)
  })),
  on(loadProjects, (state) => ({
    ...state,
    status: Status.LOADING
  })),
)