export const API_REQUEST = "API_REQUEST";

export const SEASON_TAG = "[seasons]";
export const CHAMPIONS_TAG = "[champions]";
export const WINNERS_TAG = "[winners]";

export const FETCH = "Fetch";
export const FETCH_SUCCESS = "Fetch Success";
export const FETCH_ERROR = "Fetch Error";
export const UPDATED = "UPDATED"
export const FETCH_FROM_SESSION = "Fetch From session";


export const FETCH_SEASONS = `${SEASON_TAG} ${FETCH}`;
export const FETCH_SEASONS_SUCCESS = `${SEASON_TAG} ${FETCH_SUCCESS}`;
export const UPDATE_SEASONS = `${SEASON_TAG} ${UPDATED}`;
export const FETCH_SEASONS_ERROR = `${SEASON_TAG} ${FETCH_ERROR}`;
export const FETCH_SEASONS_FROM_SESSION = `${SEASON_TAG} ${FETCH_FROM_SESSION}`;

export const FETCH_CHAMPIONS = `${CHAMPIONS_TAG} ${FETCH}`;
export const FETCH_CHAMPIONS_SUCCESS = `${CHAMPIONS_TAG} ${FETCH_SUCCESS}`;
export const UPDATE_CHAMPIONS = `${CHAMPIONS_TAG} ${UPDATED}`;
export const FETCH_CHAMPIONS_ERROR = `${CHAMPIONS_TAG} ${FETCH_ERROR}`;
export const FETCH_CHAMPIONS_FROM_SESSION = `${CHAMPIONS_TAG} ${FETCH_FROM_SESSION}`;

export const FETCH_WINNERS = `${WINNERS_TAG} ${FETCH}`;
export const FETCH_WINNERS_SUCCESS = `${WINNERS_TAG} ${FETCH_SUCCESS}`;
export const UPDATE_WINNERS = `${WINNERS_TAG} ${UPDATED}`;
export const FETCH_WINNERS_ERROR = `${WINNERS_TAG} ${FETCH_ERROR}`;

export const UPDATE_SEASON_RANGE_FROM = `${SEASON_TAG} Update Range From`;
export const UPDATE_SEASON_RANGE_TO = `${SEASON_TAG} Update Range To`;
