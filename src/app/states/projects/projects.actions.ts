import { createAction, props } from '@ngrx/store';

export const addProject = createAction(
  '[Projects] Add project',
  props<{ content: string }>()
);

export const removeProject = createAction(
  '[Projects] Remove project',
  props<{ id: string }>()
);

export const loadProjects = createAction(
  '[Projects] Load projects'
);
