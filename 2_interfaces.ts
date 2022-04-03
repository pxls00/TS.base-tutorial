interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234se42',
  size: {
    width: 12,
    height: 32
  },
  color: '#ccc'
}
const rect2: Rect = {
  id: 'asdas123',
  size: {
    width: 42,
    height: 52
  }
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// === === === === ===

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea  = {
  id: '123',
  size: {
    width: 12,
    height: 32
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

// === === === ===

interface Iclock {
  time: Date
  setTime(date: Date): void
}

class Clock implements Iclock {
  time: Date = new Date
  setTime(date: Date): void {
    this.time = date
  }
}


// === === === === === ===

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}