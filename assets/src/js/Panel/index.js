
/**
 *
 * This will be the JS code for front-end UI.
 *
 * Button:
 * - onClick:
 * -- showPanel
 *
 * Panel:
 * - showPanel:
 * -- find next js-Panel and add a class for active
 * -- if is nested panel, get dataset.contentRef and show #dataset.contentRef
 *
 * UI requirements:
 * Panel
 * -- Add id attr/prop - either content of heading block or number
 * -- If it is not the last panel, show panelNav
 * -- If nested panels, set is_nested = true in pattern obj
 * PanelNav (Clone of `buttons` block):
 * -- If it is not the last panel, show panelNav
 * -- panelNav button block inspector: text input name dataset.contentRef for writing in nested panel ID (v2 is select of nested panels in next panel)
 * -- panelNav.forEach button => href = id of next panel
 * -- panelNav.forEach button => if block inspector nested panel ID, dataset.contentRef = nested panel ID
 *
 * Things to figure out:
 * - How to get all instances of a panel block
 * - cloning buttons block
 * - adding text input to inspector
 * - adding an id to the panels
 */