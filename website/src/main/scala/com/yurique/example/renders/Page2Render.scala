package com.yurique.example
package renders

import com.raquo.laminar.api.L._

object Page2Render {

  val render: Render = page("Page 2") { () =>
    components.PageTitle("Page 2")
  }

}
