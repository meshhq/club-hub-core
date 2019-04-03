// External Dependencies.
import { Types } from 'mongoose'

// Models.
import User from './user'

// Sub Models.
import Location from './subModels/shared/location'
import RichContent from './subModels/shared/richContent'

// Shared Interfaces.
import IShared from './shared'

namespace Event {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		remoteID?: string
		name?: string
		start?: Date
		end?: Date
		creator?: Types.ObjectId | User.Model,
		rRule?: IShared.GeneralMap<any>
		rDuration?: number
		rDate?: string[]
		categories?: string[]
		location?: Location.Model
		calendarID?: Types.ObjectId
		photoURL?: string
		clubID?: Types.ObjectId
		groupID?: Types.ObjectId
		price?: string
		shortLink?: string
		reservations?: Reservation[]
		public?: boolean
		type?: Types.ObjectId
		richContent?: RichContent.Model
		maxGuests?: number // The Max Number of Guests a member can bring to an event. 
		maxParticipants?: number // The max number of people that can attend an event.
		recurring?: number
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export enum RecurringFrequency {
		YEARLY = 0,
		MONTHLY = 1,
		WEEKLY = 2,
		DAILY = 3,
		HOURLY = 4,
		MINUTELY = 5,
		SECONDLY = 6
	}
	
	export interface Reservation {
		_id?: Types.ObjectId
		creator: Types.ObjectId | User.Model
		participants: Participant[]
		meta?: ReservationMeta
	}
	
	export interface Participant {
		_id?: Types.ObjectId
		userID: Types.ObjectId | User.Model | null
		name: string
		rsvp?: boolean
		paid?: boolean
	}
	
	export type ReservationMeta = ReservationBaseMeta | CarReservationMeta // This will be extended to include golf reservation meta etc...
	
	export interface ReservationBaseMeta {
		notes: string
	}
	
	export interface CarReservationMeta extends ReservationBaseMeta {
		vehicleID: Types.ObjectId,
		type?: Types.ObjectId
	}

	/**
	 * This is used for the `timeField` query param in
	 * `getEvents`. 'start' means we will fetch all events
	 * that start at or after the time string provided.
	 * 'createdAt' means we will fetch all events created on
	 * or after the time string provided. Fetch will default to 'createdAt' 
	 * if no time field is passed in with a start / end query.
	 */
	export enum TimeFieldType {
		Start = 'start',
		CreatedAt = 'createdAt'
	}
	
	// --------------------------------
	// Available Event Status
	// --------------------------------

	export interface AvailableEvent {
		time: Date
		openSpots: number | null
		totalSpots: number | null
		existingEvent?: Event
		status: AvailableEventStatus
	}

	export enum AvailableEventStatus {
		Open = 'open', // All Slots are Open.
		PublicBooked = 'public-booked', // All spots are booked and public.
		PrivateBooked = 'private-booked', // All spots are booked and private.
		PublicJoinable = 'public-joinable', // Public booking & joinable..
		PrivateJoinable = 'private-joinable', // Private booking & joinable.
		PublicNotJoinable = 'public-not-joinable', // Public booking but not joinable.
		PrivateNotJoinable = 'private-not-joinable', // Private booking & not joinable.
	}

	export interface EventDataForCalendar {
		calendarID: Types.ObjectId,
		allTimes: Date[],
		eventInfo: AvailableEvent[],
		public: boolean
		joinable: boolean
	}
}

export default Event
