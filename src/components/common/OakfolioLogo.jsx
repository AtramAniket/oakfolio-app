import Logo from "@/assets/oakfolio-logo.svg"

const OakfolioLogo = ({ showText = true }) => {
  return (
    <div className="flex items-center gap-3">
      <img src={Logo} alt="Oakfolio" className="flex size-8 items-center justify-center rounded-lg" />

      {showText && (
        <div>
          <h1 className="text-sm font-semibold">Oakfolio</h1>
          <p className="text-xs text-muted-foreground">
            Portfolio Tracker
          </p>
        </div>
      )}
    </div>
  )
}

export default OakfolioLogo