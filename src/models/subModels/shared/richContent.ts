// Internal Dependencies
import IShared from '../../shared'

/** 
 * All models that support rich content will have this
 * field / schema on them.
 */
export namespace RichContent {

	export interface Model {
		text?: string
		html?: string
		publishedHtml?: string
		status?: IShared.PublicationStatus
		slateJSON?: string
	}

}

export default RichContent