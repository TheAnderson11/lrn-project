interface IWatchlistItem {
  id: number;
  name: string;
}

interface IUser {
  id: number;
  firstName: string;
  userName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  watchlist: IWatchlistItem[] | null;
}

export interface IUserState {
  user: IUser | null;
  token: string | null;
  activeMenuBar: boolean;
}
