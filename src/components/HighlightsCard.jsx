/* eslint-disable react/prop-types */

import { faDotCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "motion/react"

const HighlightsCard = (props) => {
    return (
        <motion.div
            initial={{ y: "50%", opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
        >
            <div className="mb-3 w-full">
                <img src={props.image} alt="image" className="rounded-lg border border-neutral-900 aspect-video" width={1600} height={900} />
            </div>
            {
                props.description && <div className="mb-10">
                    <FontAwesomeIcon icon={faDotCircle} className="mr-2" />{props.description}
                </div>
            }

            <div className="h-[1px] w-full bg-neutral-700" />
        </motion.div>
    )
}

export default HighlightsCard