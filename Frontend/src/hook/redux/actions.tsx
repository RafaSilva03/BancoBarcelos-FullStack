import { Action } from 'redux';

export interface SaveDataAction extends Action<'SAVE_DATA'> {
  payload: any;
  meta: { key: string };
}

export const saveData = (key: string, payload: any): SaveDataAction => ({
  type: 'SAVE_DATA',
  payload,
  meta: { key },
});
