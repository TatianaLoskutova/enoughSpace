function enough(cap, on, wait) {
    const pl = on + wait - cap;
    return pl < 0 ? 0 : pl;
}